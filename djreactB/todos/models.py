from email.policy import default
from django.db import models

# Create your models here.
class Todo(models.Model):

    name= models.CharField(max_length=100)
    completed= models.BooleanField(default=False)

    class Meta:
        verbose_name = "TODO"
        verbose_name_plural ="TODOs"

    def __str__(self):
        return self.name

