function CalcTotals() {
    var a = 0;
    $(ttltarget).each(function() {
        var b = $(this).find(".actcost").text();
        "" != b && !isNaN(b) && b == parseInt(b) && 0 < b && (a += 1 * b)
    });
    $("#disptotals").empty();
    var c = $("#dispcash").data("cash");
    var maxCash = 999999; // Change this to the maximum amount of cash a player can have
    var newCash = a + 1 * c; // Calculate new amount of cash after buying selected items
    newCash <= maxCash ? ($("#itemsubmit").removeAttr("disabled"), $("#disptotals").css("color", "#13C313").html(a + ' <i class="fad fa-coins"></i>'), $("#dispcash").html(newCash + ' <i class="fad fa-coins"></i>').data("cash", newCash)) : ($("#itemsubmit").prop("disabled", "disabled"), $("#disptotals").css("color", "#D62F00").html(a + ' <i class="fad fa-coins"></i>'), $("#dispcash").html(c + ' <i class="fad fa-coins"></i>').data("cash", c))
}
