from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.core.urlresolvers import reverse
from apps.tasks.models.task import Task


class TaskViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Define the test client and other test variables."""
        self.client = APIClient()
        self.task_data = {'name': 'Go to Ibiza'}
        self.response = self.client.post(
            reverse('create'),
            self.task_data,
            format="json")
        self.task = Task.objects.get()

    def test_api_can_create_a_task(self):
        """Test the api has task creation capability."""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_a_tasks(self):
        """Test the api can get a given task."""
        response = self.client.get(
            reverse('details', kwargs={'pk': self.task.id}),
            format="json"
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, self.task.name)

    def test_api_can_update_task(self):
        """Test the api can update a given task."""
        change_task = {'name': 'Something new'}
        res = self.client.put(
            reverse('details', kwargs={'pk': self.task.id}),
            change_task, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_api_can_delete_task(self):
        """Test the api can delete a task."""
        response = self.client.delete(
            reverse('details', kwargs={'pk': self.task.id}),
            format='json',
            follow=True)

        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
