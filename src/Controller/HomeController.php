<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * @Route("/index", name="app_home_index")
     *
     * @return Response
     */
    public function index()
    {
        return $this->render('home/index.html.twig');
    }
}