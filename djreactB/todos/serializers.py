from pyexpat import model
from rest_framework import serializers
from .models import Todo

class TodoSerializers(serializers.ModelSerializer):
    
    class Meta:
        model= Todo
        fields='__all'
        verbose_name = 'Todo'
        verbose_name_plural = 'Todos'