from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.quiz),
    path('step/', views.step_form),
]