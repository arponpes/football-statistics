# Generated by Django 3.0.4 on 2020-03-08 12:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200308_1216'),
    ]

    operations = [
        migrations.RemoveField(model_name='statistics', name='offsides',),
        migrations.RemoveField(model_name='statistics', name='shots_hit_woodwork',),
        migrations.AddField(
            model_name='statistics',
            name='team',
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to='core.Team',
            ),
        ),
    ]
