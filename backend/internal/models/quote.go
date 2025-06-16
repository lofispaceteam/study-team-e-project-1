package models

import "time"

type Quote struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	Text         string    `json:"text"`
	Author       string    `json:"author"`
	WritingTime  string    `json:"writing_time"` // хз наверн так лучше будет
	CreationTime time.Time `json:"creation_time"`
	UpdateTime   time.Time `json:"update_time"`
}
