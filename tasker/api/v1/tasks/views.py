from rest_framework import generics
from .serializers import TaskSerializer
from apps.tasks.models.task import Task


class TaskView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class CreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of rest api."""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new task."""
        serializer.save()


class DetailsView(TaskView):
    """This class handles the http GET, PUT and DELETE requests."""
    pass


class ChangeStateView(TaskView):
    """This class handles the http PUT request. Partial update"""

    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
