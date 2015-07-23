/*global define*/
define(function ( ) {

    'use strict';

    return {

        CL_INDICATOR : "select indicator_parent_code as parent, indicator_code as code, indicator_label as label, indicator_source as source from codes_indicators order by parent nulls first, label",
        CL_QUALIFIER: "SELECT qualifier_parent_code as parent, qualifier_code as code, qualifier_label as label FROM codes_qualifiers ORDER BY parent, label;",
        CL_COUNTRY : "SELECT country_code as code, country_label as label FROM codes_countries;",

        REFRESH_INDICATOR : "select p as parent,c as code, l as label, s as source from indicatorsList(string_to_array('{qualifier}',','), string_to_array('{country}',','), string_to_array('{year}',','))",
        REFRESH_QUALIFIER : "select p as parent,c as code, l as label from qualifiersList(string_to_array('{indicator}',','), string_to_array('{country}',','), string_to_array('{year}',','))",
        REFRESH_YEAR : "select y as code, y as label from yearsList(string_to_array('{year}',','),string_to_array('{qualifier}',','),string_to_array('{country}',','))",
        REFRESH_COUNTRY : "select c as code, l as label from countriesList(string_to_array('{indicator}',','), string_to_array('{qualifier}',','), string_to_array('{year}',','))",

        DOWNLOAD_SEARCH : "select  'Indicator' as Indicator, 'Indicator_label' as Indicator_label, 'Source'  as Source,'Source_label' as Source_label,'Country' as Country,'Country_label' as Country_label,'Year' as Year,'Year_label' as Year_label,'Qualifier' as Qualifier,'Qualifier_label' as Qualifier_label,'Value' as Value,'Unit' as Unit,'Flag' as Flag union all select Indicator,Indicator_label,Source,Source_label,Country,Country_label,Year,Year_label,Qualifier,Qualifier_label,Value,Unit,Flag from masterDataSelection( string_to_array('{indicator}',','), string_to_array('{country}',','), string_to_array('{year}',','), string_to_array('{qualifier}',',') )"

    };
});