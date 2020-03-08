from core import models
from .serializers import GameSerializer
from rest_framework import generics

class Calendar(generics.ListCreateAPIView):
    queryset = models.Game.objects.all()
    serializer_class = GameSerializer
