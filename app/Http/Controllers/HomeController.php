<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function home2(Request $request, $school_name){
        return view('welcome', compact('school_name'));
    }

    public function submit_review(Request $request){
        $response = ['status' => true];

        $dataToSubmit = [
            'school_name' => $request->post('school_name'),
            'location' => $request->post('location'),
            'size' => $request->post('size'),
            'campus_cleanliness' => $request->post('campus_cleanliness'),
            'classroom_cleanliness' => $request->post('classroom_cleanliness'),
            'amenities' => $request->post('amenities'),
            'bathroom_cleanliness' => $request->post('bathroom_cleanliness'),
            'student_friendliness' => $request->post('student_friendliness'),
            'ease_of_navigation' => $request->post('ease_of_navigation'),
            'teaching_quality' => $request->post('teaching_quality'),
            'friendliness' => $request->post('friendliness'),
            'would_recommend' => $request->post('would_recommend'),
            'ip_address' => $_SERVER['REMOTE_ADDR']
        ];

        try {
            DB::table('ratings')->insert($dataToSubmit);
        }catch(\Exception $e){
            $response['status'] = false;
            $response['error'] = $e->getMessage();
        }

        

        return response()->json($response);
    }

    public function home(Request $request){
        return view('welcome');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $ratingData = DB::

        select("
            SELECT 

            school_name,
            AVG(location) as 'location',
            AVG(size) as 'size',
            AVG(campus_cleanliness) as 'campus_cleanliness',
            AVG(amenities) as 'amenities',
            AVG(bathroom_cleanliness) as 'bathroom_cleanliness',
            AVG(student_friendliness) as 'student_friendliness',
            AVG(ease_of_navigation) as 'ease_of_navigation',
            AVG(teaching_quality) as 'teaching_quality',
            AVG(friendliness) as 'friendliness',
            AVG(would_recommend) as 'would_recommend',
            COUNT(school_name) as total_submissions

            FROM `ratings`


            GROUP BY school_name

        ");


        return view('home', compact('ratingData'));
    }


}
