$(document).ready(function () {
    $('#user').change(function () {
        var user = $('#user').val();
        var graph_count = `graphs/sequences_count/sequences_count_${user}.html`;
        var graph_len = `graphs/sequences_length/sequences_length_${user}.html`;
        var graph_len_merged = `graphs/merged_sequences_length/merged_sequences_length_${user}.html`;
        $('#sequences_count').attr('data', graph_count);
        $('#sequences_length').attr('data', graph_len);
        $('#merged_sequences_length').attr('data', graph_len_merged);
    });
});