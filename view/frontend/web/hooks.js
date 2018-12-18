/**
 * Documentation: https://community.algolia.com/magento/doc/m2/frontend-events/
 **/

/**
 * Autocomplete hook method
 * autocomplete.js documentation: https://github.com/algolia/autocomplete.js
 **/

algolia.registerHook('beforeAutocompleteSources', function(sources, algoliaClient, algoliaBundle) {

    // Modify autocomplete data sources
    var customIndex = algoliaClient.initIndex("dev_external_source_sample");
    var customIndexOptions = {
        hitsPerPage: 3
    };
    
    var customTemplate = algoliaBundle.$('#autocomplete_external_template').html();
    
    // new source appended to the `sources` array
    sources.push({
        source: algoliaBundle.$.fn.autocomplete.sources.hits(customIndex, customIndexOptions),
        templates: {
            header : '<div class="category">Articles</div>',
            empty: '<div class="aa-no-results">No result</div>',
            suggestion: function (hit) {
                return algoliaBundle.Hogan.compile(customTemplate).render(hit);
            }
        }
    });

    return sources;
});
