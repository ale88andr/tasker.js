from rest_framework import serializers
from apps.tasks.models.task import Task

class TaskSerializer(serializers.ModelSerializer):
    """Map the Task instance into JSON format."""

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Task
        fields = ('id', 'name', 'state', 'created_at', 'modified_at')
        read_only_fields = ('created_at', 'modified_at')
