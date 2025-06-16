package repositories

import (
	"RandomQuote/internal/models"

	"gorm.io/gorm"
)

type QuoteRepository struct {
	db *gorm.DB
}

func NewQuoteRepository(db *gorm.DB) *QuoteRepository {
	return &QuoteRepository{db: db}
}

func (r *QuoteRepository) GetAllQuotes() ([]models.Quote, error) {
	var quotes []models.Quote
	err := r.db.Find(&quotes).Error
	return quotes, err
}

func (r *QuoteRepository) GetQuoteByID(id string) (models.Quote, error) {
	var quote models.Quote
	err := r.db.Where("id = ?", id).First(&quote).Error
	return quote, err
}

func (r *QuoteRepository) CreateQuote(quote *models.Quote) error {
	return r.db.Create(quote).Error
}

func (r *QuoteRepository) UpdateQuote(id string, quote *models.Quote) error {
	var existingQuote models.Quote
	if err := r.db.Where("id = ?", id).First(&existingQuote).Error; err != nil {
		return err
	}

	existingQuote.Text = quote.Text
	existingQuote.Author = quote.Author
	existingQuote.WritingTime = quote.WritingTime
	existingQuote.UpdateTime = quote.UpdateTime

	return r.db.Save(&existingQuote).Error
}

func (r *QuoteRepository) DeleteQuote(id string) error {
	return r.db.Where("id = ?", id).Delete(&models.Quote{}).Error
}

func (r *QuoteRepository) GetRandomQuote() (models.Quote, error) {
	var quote models.Quote
	err := r.db.Order("RANDOM()").Limit(1).Find(&quote).Error
	return quote, err
}
		
