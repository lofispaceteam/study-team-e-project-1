package routes

import (
	"RandomQuote/internal/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine, handler *handlers.QuoteHandler) {
	routes := r.Group("/quotes")
	{
		routes.GET("", handler.GetAllQuotes)
		routes.GET("/:id", handler.GetQuoteByID)
		routes.POST("", handler.CreateQuote)
		routes.PUT("/:id", handler.UpdateQuote)
		routes.DELETE("/:id", handler.DeleteQuote)
		routes.GET("/random", handler.GetRandomQuote)
	}
}
