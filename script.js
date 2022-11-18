$('#user').change(function () {
    var user = $('#user').val();
    var graph = `graphs/length_sequences_graph_${user}`;
    $('#len_graph').attr('data', graph);
});
