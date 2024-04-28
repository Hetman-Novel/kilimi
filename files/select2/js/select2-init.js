$(function() {
    $('.select2').select2();
    $('.select-region').select2({
        language: "uk",
        placeholder: "Виберіть вашу область"
    });
    $('.select-sity').select2({
        language: "uk",
        placeholder: "Виберіть ваше місто"
    });
    $('.select-nova-poshta-branch').select2({
        language: "uk",
        placeholder: "Виберіть відділення Нової Пошти"
    });
});