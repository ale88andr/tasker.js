from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .tasks.views import CreateView, DetailsView, ChangeStateView 

urlpatterns = {
    url(r'^tasks/$', CreateView.as_view(), name="create"),
    url(r'^tasks/(?P<pk>[0-9]+)/$', DetailsView.as_view(), name="details"),
    url(r'^tasks/(?P<pk>[0-9]+)/state/$', ChangeStateView.as_view(), name="details"),
}

urlpatterns = format_suffix_patterns(urlpatterns)