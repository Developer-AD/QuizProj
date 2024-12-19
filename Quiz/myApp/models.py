from django.db import models

class Question(models.Model):
    question = models.CharField(max_length=255)

    def __str__(self):
        return self.question


class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    option = models.CharField(max_length=255)
    correct = models.BooleanField(default=False)

    def __str__(self):
        return self.option