from core import models
from .serializers import GameSerializer, TeamSerializer
from rest_framework import generics

class Calendar(generics.ListCreateAPIView):
    queryset = models.Game.objects.all()
    serializer_class = GameSerializer


class Teams(generics.ListCreateAPIView):
    queryset = models.Team.objects.all()
    serializer_class = TeamSerializer
