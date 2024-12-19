from django.urls import path
from accounts  import views

urlpatterns = [path('login/', views.LoginView.as_view(), name='login'),
path('api/register/', views.register_user, name='register_user'),
]
