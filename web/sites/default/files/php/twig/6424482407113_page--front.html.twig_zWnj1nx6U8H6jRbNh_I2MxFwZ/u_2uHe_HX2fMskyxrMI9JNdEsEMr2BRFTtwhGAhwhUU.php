<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/simplesmart/templates/page--front.html.twig */
class __TwigTemplate_e12fe68f4491cfa38b596044aba142b2fbc6344efbd3cff36c2030d598fad2f7 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 45
        echo "<div class=\"layout-container\">

  <header role=\"banner\">
    ";
        // line 48
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 48), 48, $this->source), "html", null, true);
        echo "
  </header>

  ";
        // line 51
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
        echo "
  ";
        // line 52
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 52), 52, $this->source), "html", null, true);
        echo "

  ";
        // line 54
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 54), 54, $this->source), "html", null, true);
        echo "

  ";
        // line 56
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 56), 56, $this->source), "html", null, true);
        echo "

  ";
        // line 58
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
        echo "
  ";
        // line 59
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "hero", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
        echo "
  <main role=\"main\">
    <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 62
        echo "
    <div class=\"main-body\">

      ";
        // line 65
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 65)) {
            // line 66
            echo "        <aside class=\"layout-sidebar-first\" role=\"complementary\">
          ";
            // line 67
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 67), 67, $this->source), "html", null, true);
            echo "
        </aside>
      ";
        }
        // line 70
        echo "
      <div class=\"layout-content\">
        ";
        // line 72
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
        echo "
      </div>";
        // line 74
        echo "
      ";
        // line 75
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 75)) {
            // line 76
            echo "        <aside class=\"layout-sidebar-second\" role=\"complementary\">
          ";
            // line 77
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 77), 77, $this->source), "html", null, true);
            echo "
        </aside>
      ";
        }
        // line 80
        echo "    </div>

  </main>

  ";
        // line 84
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom", [], "any", false, false, true, 84)) {
            // line 85
            echo "    <footer role=\"contentinfo\">
      ";
            // line 86
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom", [], "any", false, false, true, 86), 86, $this->source), "html", null, true);
            echo "
    </footer>
  ";
        }
        // line 89
        echo "  ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_top", [], "any", false, false, true, 89)) {
            // line 90
            echo "    <footer role=\"contentinfo\">
      ";
            // line 91
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_top", [], "any", false, false, true, 91), 91, $this->source), "html", null, true);
            echo "
    </footer>
  ";
        }
        // line 94
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom", [], "any", false, false, true, 94)) {
            // line 95
            echo "    <footer role=\"contentinfo\">
      ";
            // line 96
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_bottom", [], "any", false, false, true, 96), 96, $this->source), "html", null, true);
            echo "
    </footer>
  ";
        }
        // line 99
        echo "
</div>";
    }

    public function getTemplateName()
    {
        return "themes/custom/simplesmart/templates/page--front.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 99,  151 => 96,  148 => 95,  145 => 94,  139 => 91,  136 => 90,  133 => 89,  127 => 86,  124 => 85,  122 => 84,  116 => 80,  110 => 77,  107 => 76,  105 => 75,  102 => 74,  98 => 72,  94 => 70,  88 => 67,  85 => 66,  83 => 65,  78 => 62,  73 => 59,  69 => 58,  64 => 56,  59 => 54,  54 => 52,  50 => 51,  44 => 48,  39 => 45,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   \"/\" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.primary_menu: Items for the primary menu region.
 * - page.secondary_menu: Items for the secondary menu region.
 * - page.highlighted: Items for the highlighted content region.
 * - page.help: Dynamic help text, mostly for admin pages.
 * - page.content: The main content of the current page.
 * - page.sidebar_first: Items for the first sidebar.
 * - page.sidebar_second: Items for the second sidebar.
 * - page.footer: Items for the footer region.
 * - page.breadcrumb: Items for the breadcrumb region.
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 */
#}
<div class=\"layout-container\">

  <header role=\"banner\">
    {{ page.header }}
  </header>

  {{ page.primary_menu }}
  {{ page.secondary_menu }}

  {{ page.breadcrumb }}

  {{ page.highlighted }}

  {{ page.help }}
  {{ page.hero }}
  <main role=\"main\">
    <a id=\"main-content\" tabindex=\"-1\"></a>{# link is in html.html.twig #}

    <div class=\"main-body\">

      {% if page.sidebar_first %}
        <aside class=\"layout-sidebar-first\" role=\"complementary\">
          {{ page.sidebar_first }}
        </aside>
      {% endif %}

      <div class=\"layout-content\">
        {{ page.content }}
      </div>{# /.layout-content #}

      {% if page.sidebar_second %}
        <aside class=\"layout-sidebar-second\" role=\"complementary\">
          {{ page.sidebar_second }}
        </aside>
      {% endif %}
    </div>

  </main>

  {% if page.featured_bottom%}
    <footer role=\"contentinfo\">
      {{ page.featured_bottom }}
    </footer>
  {% endif %}
  {% if page.footer_top %}
    <footer role=\"contentinfo\">
      {{ page.footer_top }}
    </footer>
  {% endif %}
    {% if page.footer_bottom %}
    <footer role=\"contentinfo\">
      {{ page.footer_bottom }}
    </footer>
  {% endif %}

</div>{# /.layout-container #}
", "themes/custom/simplesmart/templates/page--front.html.twig", "/var/www/html/web/themes/custom/simplesmart/templates/page--front.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 65);
        static $filters = array("escape" => 48);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
