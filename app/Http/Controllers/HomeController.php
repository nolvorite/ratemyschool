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

        //check to see how many was submitted in this IP

        $countCheck = DB::table('ratings')->where('ip_address',$_SERVER['REMOTE_ADDR'])->get();

        if(count($countCheck) >= 10):

            $response['status'] = false;
            $response['error'] = 'Maximum registration attempts exceeded.';

        else:

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

        endif;

        

        return response()->json($response);
    }

    public function home(Request $request){
        $ratingData = DB::

        select("
            SELECT 

            school_name,
            (
            AVG(location) +
            AVG(size) +
            AVG(campus_cleanliness) +
            AVG(amenities) +
            AVG(bathroom_cleanliness) +
            AVG(student_friendliness) +
            AVG(ease_of_navigation) +
            AVG(teaching_quality) +
            AVG(friendliness) +
            AVG(would_recommend) 

            ) / 10 AS true_average


            FROM `ratings`


            GROUP BY school_name

        ");

        $schoolList = true;

        return view('welcome', compact('ratingData', 'schoolList'));
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function schools(Request $request){
        $ratingData = DB::

        select("
            SELECT 

            school_name,
            (
            AVG(location) +
            AVG(size) +
            AVG(campus_cleanliness) +
            AVG(amenities) +
            AVG(bathroom_cleanliness) +
            AVG(student_friendliness) +
            AVG(ease_of_navigation) +
            AVG(teaching_quality) +
            AVG(friendliness) +
            AVG(would_recommend) 

            ) / 10 AS true_average


            FROM `ratings`


            GROUP BY school_name

        ");

        return view('welcome', ['schoolList' => true, 'ratingData' => $ratingData]);


    }

    public function get_rating(Request $request, $school_name){

        @$ratingData =  DB::

        select("
            SELECT 

            school_name,
            ROUND(AVG(location)) as 'location',
            ROUND(AVG(size)) as 'size',
            ROUND(AVG(campus_cleanliness)) as 'campus_cleanliness',
            ROUND(AVG(amenities)) as 'amenities',
            ROUND(AVG(bathroom_cleanliness)) as 'bathroom_cleanliness',
            ROUND(AVG(student_friendliness)) as 'student_friendliness',
            ROUND(AVG(ease_of_navigation)) as 'ease_of_navigation',
            ROUND(AVG(teaching_quality)) as 'teaching_quality',
            ROUND(AVG(friendliness)) as 'friendliness',
            ROUND(AVG(would_recommend)) as 'would_recommend'

            FROM `ratings`

            WHERE LOWER(school_name) = ?

            GROUP BY school_name

        ", [strtolower($school_name)])[0];

        if($ratingData === null){
            return redirect('/schools');
        }

        return view('welcome', ['viewSchool' => true, 'ratingData' => $ratingData, 'school_name' => $school_name]);

    }

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
