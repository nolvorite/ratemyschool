@extends('layouts.app')

@section('content')
<style type="text/css">
.bodycontainer { max-height: 450px; width: 100%; margin: 0; overflow-y: auto; }
.table-scrollable { margin: 0; padding: 0; }
</style>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Statistics</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <!-- table -->

                    <div class="table-responsive">

                        <table class="table table-striped table-sm table-scrollable" id="data_table">
                            <thead>
                                <tr>
                                    <th width="30%" style="min-width:30%"><div style='min-width: 300px'>School Name</div></th>
                                    <th>Location</th>
                                    <th>Size</th>
                                    <th>Campus Cleanliness</th>
                                    <th>Amenities</th>
                                    <th>Bathroom Cleanliness</th>
                                    <th>Student Friendliness</th>
                                    <th>Ease of Navigation</th>
                                    <th>Teaching Quality</th>
                                    <th>Friendliness</th>
                                    <th>Would Recommend</th>
                                    <th>Submission Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($ratingData as $r)
                                <?php $r = (array) $r; ?>
                                <tr>
                                    <td>{{ $r['school_name'] }}</td>
                                    <td>{{ $r['location'] }}</td>
                                    <td>{{ $r['size'] }}</td>
                                    <td>{{ $r['campus_cleanliness'] }}</td>
                                    <td>{{ $r['amenities'] }}</td>
                                    <td>{{ $r['bathroom_cleanliness'] }}</td>
                                    <td>{{ $r['student_friendliness'] }}</td>
                                    <td>{{ $r['ease_of_navigation'] }}</td>
                                    <td>{{ $r['teaching_quality'] }}</td>
                                    <td>{{ $r['friendliness'] }}</td>
                                    <td>{{ $r['would_recommend'] }}</td>
                                    <td>{{ $r['total_submissions'] }}</td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>

                    </div>

                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
