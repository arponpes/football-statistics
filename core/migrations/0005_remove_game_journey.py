# Generated by Django 3.0.4 on 2020-03-26 21:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_game_journey'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='game',
            name='journey',
        ),
    ]
