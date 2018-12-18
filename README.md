# algoliasearch-magento2-external-source
Demo module to add an external source on the autocomplete menu

- 1 - Create a new index **dev_external_source_sample** in your dashboard
- 2 - Manually add the sample records situated in the **data/dev_external_source_sample.json** file
- 3 - Configure the index (attributes **post_title** and **post_author** searchable and **url** retrievable)
- 4 - Install the module  : **composer require damcou/algoliasearch-magento2-external-source**
- 5 - Run **bin/magento setup:upgrade**
- 6 - Clean the cache
