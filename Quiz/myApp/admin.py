from django.contrib import admin
from .models import *

# Define an inline model for Answer so it can be added from the Question form
class AnswerInline(admin.TabularInline):  # You can use admin.StackedInline for a vertical layout
    model = Answer
    extra = 1  # Number of empty answer rows to display when adding a Question
    fields = ('option', 'correct')  # You can customize which fields to show

# Define the Question model admin
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question',)  # Show the question text in the list view
    inlines = [AnswerInline]  # Include the AnswerInline form to add answers from the Question admin

# Register the models
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer)  # Register Answer normally, it's already handled in the Question form
