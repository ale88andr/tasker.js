from rest_framework import generics
from .serializers import TaskSerializer
from apps.tasks.models.task import Task

class CreateView(generics.ListCreateAPIView):
    """This class defines the create behavior of rest api."""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new task."""
        serializer.save()


class DetailsView(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class ChangeStateView(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)
