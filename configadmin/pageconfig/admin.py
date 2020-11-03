from django.contrib import admin
from django.urls import reverse
from django.utils.html import format_html
from django.utils.http import urlencode

from .models import TopsliderSec, HowSec, HowStep, ClientsSec, Clienticon,Partner,InformationCorner,ContactInfo

admin.site.register(Clienticon)
admin.site.register(Partner)
admin.site.register(InformationCorner)
admin.site.register(ContactInfo)


@admin.register(TopsliderSec)
class TopsliderSecAdmin(admin.ModelAdmin):
    list_display = ('title', 'paragraph', 'button_label', 'background_image')
    list_filter = ('title', 'button_label')
    search_fields = ('title',)


class HowStepInline(admin.TabularInline):
    model = HowStep
    extra = 2


@admin.register(HowSec)
class HowSecAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'steps_count']

    inlines = [HowStepInline]

    def steps_count(self,obj):
        from django.db.models import Count
        result = HowStep.objects.filter(how_sec=obj).aggregate(Count("title"))
        return result["title__count"]


class ClienticonInline(admin.TabularInline):
    model = Clienticon
    extra = 2


@admin.register(ClientsSec)
class ClientsSecAdmin(admin.ModelAdmin):
    inlines = [ClienticonInline]
    list_display = ['title', 'view_icons_link']

    def view_icons_link(self, obj):
        count = obj.clienticon_set.count()
        url = (
                reverse("admin:pageconfig_clienticon_changelist")
                + "?"
                + urlencode({"clientssec__id": f"{obj.id}"})
        )
        return format_html('<a href="{}">{} icons </a>', url, count)


def make_step_description_empty_action(modeladmin, request, queryset):
    queryset.update(description='')


make_step_description_empty_action.short_description = "Delete selected description "


@admin.register(HowStep)
class HowStepAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']
    actions = [make_step_description_empty_action]
