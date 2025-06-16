package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"RandomQuote/internal/handlers"
	"RandomQuote/internal/models"
	"RandomQuote/internal/repositories"
	"RandomQuote/internal/routes"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env")
	}

	fmt.Println("DB_USER:", os.Getenv("DB_USER"))
	fmt.Println("DB_PASSWORD:", os.Getenv("DB_PASSWORD"))
	fmt.Println("DB_NAME:", os.Getenv("DB_NAME"))
	fmt.Println("DB_HOST:", os.Getenv("DB_HOST"))
	fmt.Println("DB_PORT:", os.Getenv("DB_PORT"))

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Error connecting to the DB")
	}

	sqlDB, _ := db.DB()
	defer sqlDB.Close()

	db.AutoMigrate(&models.Quote{})


	quoteRepo := repositories.NewQuoteRepository(db)
	quoteHandler := handlers.NewQuoteHandler(quoteRepo)

	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
	}))

	routes.SetupRoutes(r, quoteHandler)

	port := os.Getenv("PORT")
	log.Printf("Server is running on port %s . . .", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Error starting the server")
	}
}
