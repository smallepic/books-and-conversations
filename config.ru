require 'rack/rewrite'
require 'rack/jekyll'

use Rack::Rewrite do
	rewrite /(.+)/, '$1.html', not: /\.html\z/
end

run Rack::Jekyll.new