package handlers

import (
	"net/http"
	"time"

	"RandomQuote/internal/models"
	"RandomQuote/internal/repositories"

	"github.com/gin-gonic/gin"
)

type QuoteHandler struct {
	repo *repositories.QuoteRepository
}

func NewQuoteHandler(repo *repositories.QuoteRepository) *QuoteHandler {
	return &QuoteHandler{repo: repo}
}

func (h *QuoteHandler) GetAllQuotes(c *gin.Context) {
	quotes, err := h.repo.GetAllQuotes()
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, quotes)
}

func (h *QuoteHandler) GetQuoteByID(c *gin.Context) {
	id := c.Param("id")
	quote, err := h.repo.GetQuoteByID(id)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": "Cannot find the quote"})
		return
	}
	c.JSON(http.StatusOK, quote)
}

func (h *QuoteHandler) CreateQuote(c *gin.Context) {
	var quote models.Quote
	if err := c.ShouldBindJSON(&quote); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	quote.CreationTime = time.Now()
	quote.UpdateTime = time.Now()

	if err := h.repo.CreateQuote(&quote); err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, quote)
}

func (h *QuoteHandler) UpdateQuote(c *gin.Context) {
	id := c.Param("id")
	var input models.Quote
	if err := c.ShouldBindJSON(&input); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	input.UpdateTime = time.Now()

	if err := h.repo.UpdateQuote(id, &input); err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Quote was succesfully updated"})
}

func (h *QuoteHandler) DeleteQuote(c *gin.Context) {
	id := c.Param("id")
	if err := h.repo.DeleteQuote(id); err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Quote was succesfully deleted"})
}

func (h *QuoteHandler) GetRandomQuote(c *gin.Context) {
	quote, err := h.repo.GetRandomQuote()
	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, quote)
}
