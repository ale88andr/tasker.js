from django.db import models


class Task(models.Model):

    # Task states
    DURING = 1
    COMPLETED = 2
    DELETED = 3
    OTHER = 0

    STATES = (
        (DURING, 'выполняется'),
        (COMPLETED, 'завершена'),
        (DELETED, 'удалена'),
        (OTHER, 'другое'),
    )

    """This class represents the Task model."""
    name = models.CharField(max_length=255, blank=False, unique=True)
    state = models.IntegerField(choices=STATES, default=DURING, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'
        ordering = ['-created_at']

    def __str__(self):
        return '<Task> name:{}'.format(self.name)
