from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


class Game(models.Model):
    local_team = models.ForeignKey(
        'Team', related_name='local_team', on_delete=models.CASCADE
    )
    away_team = models.ForeignKey(
        'Team', related_name='away_team', on_delete=models.CASCADE
    )
    date = models.DateField()
    local_team_statistics = models.ForeignKey(
        'Statistics',
        related_name='local_team_statistics',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    away_team_statistics = models.ForeignKey(
        'Statistics',
        related_name='away_team_statistics',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f'{self.local_team.name} - {self.away_team.name}'


class Statistics(models.Model):
    team = models.ForeignKey('Team', on_delete=models.CASCADE, blank=True, null=True)
    half_time_goals = models.IntegerField(blank=True, null=True)
    full_time_goals = models.IntegerField(blank=True, null=True)
    shots = models.IntegerField(blank=True, null=True)
    shots_on_target = models.IntegerField(blank=True, null=True)
    corners = models.IntegerField(blank=True, null=True)
    fouls_committed = models.IntegerField(blank=True, null=True)
    yellow_cards = models.IntegerField(blank=True, null=True)
    red_cards = models.IntegerField(blank=True, null=True)
