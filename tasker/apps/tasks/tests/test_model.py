from django.test import TestCase
from apps.tasks.models.task import Task

class TaskModelTestCase(TestCase):
    """Test suite for the Task model."""

    def setUp(self):
        """Define the test client and other test variables."""
        self.task_name = "Write world class code"
        self.task = Task(name=self.task_name)

    def test_model_can_create_a_task(self):
        """Test the Task model can create a task."""
        old_count = Task.objects.count()
        self.task.save()
        new_count = Task.objects.count()
        self.assertNotEqual(old_count, new_count)
