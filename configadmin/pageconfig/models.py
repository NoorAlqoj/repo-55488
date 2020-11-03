from django.db import models


class TopsliderSec(models.Model):
    title = models.CharField(max_length=30)
    paragraph = models.TextField()
    button_label = models.CharField(max_length=30)
    background_image = models.ImageField(upload_to='images')

    def __str__(self):
        return self.title


class HowSec(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()

    def __str__(self):
        return self.title


class HowStep(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    icon_image = models.ImageField(upload_to='images')
    how_sec = models.ForeignKey(HowSec, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class ClientsSec(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()

    def __str__(self):
        return self.title


class Clienticon(models.Model):
    logo_image = models.ImageField(upload_to='images')
    clients_sec = models.ForeignKey(ClientsSec, on_delete=models.CASCADE)

    def __str__(self):
        return self.clients_sec.title+" icon"

class Partner(models.Model):
    logo_image = models.ImageField(upload_to='images')
    link = models.CharField(max_length=100)

class ContactInfo(models.Model):
    icon_image = models.ImageField(upload_to='images')
    contact_by = models.CharField(max_length=30)

class InformationCorner(models.Model):
    title=models.CharField(max_length=30)
