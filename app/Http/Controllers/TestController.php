<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class TestController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function testMethod() {
        return array(
            'email' => 'sjwiq200@zzieut.com'
        );
    }
}
