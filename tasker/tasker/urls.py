from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^backend/', admin.site.urls),
    url(r'^api/v1/', include('api.v1.urls')),
    url(r'^$', TemplateView.as_view(template_name='public/index.html')),
]
