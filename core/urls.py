from django.urls import path
from . import views

urlpatterns = [
    path('api/game_list/', views.Calendar.as_view()),
]