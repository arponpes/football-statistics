from django.core.management.base import BaseCommand, CommandError

from datetime import datetime

from core.models import Team, Game, Statistics

import csv


class Command(BaseCommand):
    help = 'Export all the results of La Liga'

    def add_arguments(self, parser):
        parser.add_argument('la_liga_csv')

    def handle(self, *args, **options):
        for g in Game.objects.all():
            g.delete()
        for s in Statistics.objects.all():
            s.delete()

        with open(options['la_liga_csv']) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            for row in csv_reader:
                if line_count == 0:
                    line_count += 1
                else:
                    local_team = Statistics(
                        team=Team.objects.get(name=row[3]),
                        half_time_goals=row[8],
                        full_time_goals=row[5],
                        shots=row[11],
                        shots_on_target=row[13],
                        corners=row[17],
                        fouls_committed=row[15],
                        yellow_cards=row[19],
                        red_cards=row[21]
                    )
                    away_team = Statistics(
                        team=Team.objects.get(name=row[4]),
                        half_time_goals=row[9],
                        full_time_goals=row[6],
                        shots=row[12],
                        shots_on_target=row[14],
                        corners=row[18],
                        fouls_committed=row[16],
                        yellow_cards=row[20],
                        red_cards=row[22]
                    )
                    local_team.save()
                    away_team.save()

                    Game(
                        local_team=Team.objects.get(name=row[3]),
                        away_team=Team.objects.get(name=row[4]),
                        date=datetime.strptime(row[1], '%d/%m/%Y'),
                        local_team_statistics=local_team,
                        away_team_statistics=away_team,
                    ).save()
                    line_count += 1
            print(f'Processed {line_count} lines.')
