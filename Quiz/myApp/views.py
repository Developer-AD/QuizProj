from django.shortcuts import render
from . models import *
# Create your views here.

def quiz(request):
    questions = Question.objects.all()

    ques_answers = []
    for question in questions:
        answers = question.answers.all()
        ques_answers.append((question, answers))

    print('*'*100)
    print(ques_answers)
    print('*'*100)

    contexts = {
        'ques_answers':ques_answers
    }

    return render(request, "quiz.html", contexts)

def step_form(request):
    questions = Question.objects.all()

    ques_answers = []
    for question in questions:
        answers = question.answers.all()
        ques_answers.append((question, answers))

    print('*'*100)
    print(ques_answers)
    print('*'*100)

    contexts = {
        'ques_answers':ques_answers
    }

    return render(request, "stepForm.html", contexts)
