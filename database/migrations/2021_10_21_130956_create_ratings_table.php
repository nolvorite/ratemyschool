<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->string('school_name');
            $table->integer('location')->default(1);
            $table->integer('size')->default(1);
            $table->integer('campus_cleanliness')->default(1);
            $table->integer('classroom_cleanliness')->default(1);
            $table->integer('amenities')->default(1);
            $table->integer('bathroom_cleanliness')->default(1);
            $table->integer('student_friendliness')->default(1);
            $table->integer('ease_of_navigation')->default(1);
            $table->integer('teaching_quality')->default(1);
            $table->integer('friendliness')->default(1);
            $table->integer('would_recommend')->default(1);
            $table->string('ip_address')->unique();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ratings');
    }
}
