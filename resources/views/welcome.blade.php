<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>RateMySchool</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body>

        <!-- React root DOM -->
        <div id="root">
        </div>

        <!-- React JS -->

        <script type="text/javascript">
            const token = "{{ csrf_token() }}";
            const siteUrl = "{{ URL::to('') }}/";
        </script>

        @if(isset($school_name))
        <script type="text/javascript">
            const schoolName = "{{ $school_name }}";
        </script>
        @endif

        <script src="{{ asset('js/index.js') }}"></script>

        <script type="text/javascript">

            $(document).ready(function(){
                $("body").on("click","#submit_review",function(event){

                    event.preventDefault();

                    if($("input:checked").length < 11){
                        alert("You missed some ranking criteria. Please make sure they're all rated.");
                    }else{
                        var dataToSubmit = {};

                        var schoolName = $(".Dropdown-placeholder.is-selected").text();

                        dataToSubmit.school_name = schoolName;
                        dataToSubmit._token = token;
                        $("input:checked").each(function(){
                            var propertyName = $(this).attr('name');
                            dataToSubmit[propertyName] = $(this).val();
                        });

                        console.log(dataToSubmit);

                        $.post(siteUrl+'submit_review', dataToSubmit).done(function(results){
                            if(results.status){
                                alert("Successfully submitted review!");
                                window.location.href = siteUrl;
                            }else{
                                alert('Failed to submit data. Please check your fields.');
                            }
                        }, "json")
                        .fail(function(error){
                            console.log('wtf is happening', error);
                        });
                        ;
                    }
                });
            })
        </script>
    

    </body>
    
</html>