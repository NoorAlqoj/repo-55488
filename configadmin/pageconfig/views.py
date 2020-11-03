from django.shortcuts import render
from django.views.generic.base import TemplateView
from .models import TopsliderSec, HowSec, ClientsSec, \
    Partner, ContactInfo, InformationCorner


class Index(TemplateView):
    template_name = 'pageconfig/index.html'

    def get_context_data(self, **kwargs):
        slides = TopsliderSec.objects.all()
        clients = ClientsSec.objects.all()
        how_it_works = HowSec.objects.all()

        partners = Partner.objects.all()
        contacts = ContactInfo.objects.all()
        information_corners = InformationCorner.objects.all()
        return {'slides': slides, 'clients': clients, 'how_it_works': how_it_works,
                'partners': partners, 'contacts': contacts, 'information_corners': information_corners}
