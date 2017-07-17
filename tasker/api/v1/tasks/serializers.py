from rest_framework import serializers
from apps.tasks.models.task import Task

class TaskSerializer(serializers.ModelSerializer):
    """Map the Task instance into JSON format."""
    created = serializers.DateTimeField(
        source='created_at',
        format='%Y/%m/%d %H:%M',
        required=False,
        read_only=True
    )
    modified = serializers.DateTimeField(
        source='modified_at',
        format='%Y/%m/%d',
        required=False,
        read_only=True
    )

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Task
        fields = ('id', 'name', 'state', 'created', 'modified')
        read_only_fields = ('created_at', 'modified_at')
