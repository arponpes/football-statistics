from rest_framework import serializers
from core import models



class StatisticsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Statistics
        fields = (
            'team',
            'half_time_goals',
            'full_time_goals',
            'shots',
            'shots_on_target',
            'corners',
            'fouls_committed',
            'yellow_cards',
            'red_cards'
        )



class GameSerializer(serializers.ModelSerializer):

    local_team = serializers.SlugRelatedField(slug_field="name", read_only=True)
    away_team = serializers.SlugRelatedField(slug_field="name", read_only=True)
    local_team_statistics = StatisticsSerializer(read_only=True)
    away_team_statistics = StatisticsSerializer(read_only=True)

    class Meta:
        model = models.Game
        fields = (
            'id',
            'local_team',
            'away_team',
            'date',
            'local_team_statistics',
            'away_team_statistics'
        )


class TeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Team
        fields = (
            'name',
        )
