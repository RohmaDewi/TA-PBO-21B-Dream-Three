/* json file example
[
	{
    "id" : 001,
		"name" : "Adi",
    "gender" "L",
		"data" : [...]
	},
  {
  	"id" : 002,
    "name" : "Budi",
    "gender" "L",
    "data" : [....]
  },
  {
  	"id" : 003,
    "name" : "Wati",
    "gender" "P",
    "data" : [....]
  }
]
*/


$(document).ready(function(){

    var tableDate = "";
    var tableContent =  "";
    var $td =  "";
    
    var $label ="<label class='label-checkbox'><input type='checkbox'/></label>";
      
    for(var i=1; i<=31; i++){
          tableDate += "<td class='td-date text-center'><b class='date'>"+ i +"</b></td>";
      }
      
    $( tableDate ).prependTo( ".table-row-head" );
      
  
    for(var i=1; i<=31; i++){
          tableContent += "<td class='text-center' data-date='"+ i +"'>"+ $label +"</td>";
    }
   
    $( tableContent ).appendTo( ".table-body-content tr" );
      
    for(var td=1; td<=2; td++){
          $td += "<td class='text-center' data-info='"+ td +"'</td>";
    }
    
    $( $td ).insertAfter( ".table-body-content td[data-date='31']" );
    
   
    $( document ).on( "change", ".label-checkbox", function(){
      $( this ).toggleClass( "active" );
      checkData();
    });
      
      
  });
  
  function checkData(){
    $( ".label-checkbox" ).each(function(){
      var $parents  = $( this ).parents( "tr" );
      var $checked      = $parents.find( "input:checked" ).length;
      var $no_checked   = $parents.find( "input" ).length;
      var $true = $checked;
      var $false = [ $no_checked - $checked];
    
      $parents.find( "[data-info='1']" ).html( $true );
      $parents.find( "[data-info='2']" ).html( $false );   
    });
  }
  
  $( document ).ready(function(){
    checkData();
  });