import sys
import urllib.request
import urllib.parse
import re
from html.parser import HTMLParser

class SEOParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = None
        self.meta_tags = []
        self.headings = {f"h{i}": [] for i in range(1, 7)}
        self.canonical = None
        self.json_ld_schemas = []
        
        self.in_title = False
        self.in_script = False
        self.script_attrs = {}
        self.current_script_content = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == 'title':
            self.in_title = True
        elif tag == 'meta':
            self.meta_tags.append(attrs_dict)
        elif tag == 'link' and attrs_dict.get('rel') == 'canonical':
            self.canonical = attrs_dict.get('href')
        elif tag in self.headings:
            self.current_heading = tag
        elif tag == 'script':
            self.in_script = True
            self.script_attrs = attrs_dict
            self.current_script_content = []

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag in self.headings:
            self.current_heading = None
        elif tag == 'script':
            self.in_script = False
            if self.script_attrs.get('type') == 'application/ld+json':
                content = "".join(self.current_script_content).strip()
                if content:
                    self.json_ld_schemas.append(content)

    def handle_data(self, data):
        if self.in_title:
            self.title = data.strip()
        elif hasattr(self, 'current_heading') and self.current_heading:
            self.headings[self.current_heading].append(data.strip())
        elif self.in_script:
            self.current_script_content.append(data)

def audit_url(url):
    print(f"==================================================")
    print(f"AUDITING URL: {url}")
    print(f"==================================================")
    
    # Fetch HTML
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) SEO-Audit-Bot'}
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='replace')
            status = response.status
    except Exception as e:
        print(f"[-] Error fetching URL: {e}")
        return False

    print(f"[+] Status Code: {status}")
    
    # Parse HTML
    parser = SEOParser()
    parser.feed(html)
    
    print("\n--- BASIC SEO ELEMENT CHECKS ---")
    if parser.title:
        print(f"[+] Title ({len(parser.title)} chars): {parser.title}")
    else:
        print("[-] Missing <title> tag!")

    # Meta Description & Keywords
    description = None
    keywords = None
    geo_region = None
    geo_placename = None
    geo_position = None
    icbm = None
    og_title = None
    og_desc = None
    og_image = None
    og_url = None
    twitter_card = None
    lang = None
    
    # Try parsing lang from HTML tag via regex since html parser feed is partial
    lang_match = re.search(r'<html[^>]*lang=["\']([^"\']+)["\']', html, re.IGNORECASE)
    if lang_match:
        lang = lang_match.group(1)
        print(f"[+] Lang attribute: {lang}")
    else:
        print("[-] Missing or unparseable <html lang=...> attribute!")

    for meta in parser.meta_tags:
        name = meta.get('name', '').lower()
        prop = meta.get('property', '').lower()
        content = meta.get('content')
        
        if name == 'description':
            description = content
        elif name == 'keywords':
            keywords = content
        elif name == 'geo.region':
            geo_region = content
        elif name == 'geo.placename':
            geo_placename = content
        elif name == 'geo.position':
            geo_position = content
        elif name == 'icbm':
            icbm = content
        elif prop == 'og:title':
            og_title = content
        elif prop == 'og:description':
            og_desc = content
        elif prop == 'og:image':
            og_image = content
        elif prop == 'og:url':
            og_url = content
        elif name == 'twitter:card':
            twitter_card = content

    if description:
        print(f"[+] Description ({len(description)} chars): {description}")
    else:
        print("[-] Missing meta description!")

    if keywords:
        print(f"[+] Keywords: {keywords}")
    else:
        print("[-] Missing meta keywords!")

    if parser.canonical:
        print(f"[+] Canonical URL: {parser.canonical}")
    else:
        print("[-] Missing rel=canonical link tag!")

    print("\n--- GEO / AI SEARCH ENGINE OPTIMIZATION CHECKS ---")
    
    # Geo Tags
    if geo_region or geo_placename or geo_position or icbm:
        print("[+] Geo Metadata present:")
        if geo_region: print(f"    - geo.region: {geo_region}")
        if geo_placename: print(f"    - geo.placename: {geo_placename}")
        if geo_position: print(f"    - geo.position: {geo_position}")
        if icbm: print(f"    - ICBM: {icbm}")
    else:
        print("[-] Missing local SEO geo meta tags (geo.region, geo.placename, geo.position, ICBM)")

    # Open Graph & Twitter Cards
    if og_title or og_desc or og_image or og_url:
        print("[+] Open Graph (OG) tags present:")
        if og_title: print(f"    - og:title: {og_title}")
        if og_desc: print(f"    - og:description: {og_desc}")
        if og_image: print(f"    - og:image: {og_image}")
        if og_url: print(f"    - og:url: {og_url}")
    else:
        print("[-] Missing Open Graph (og:) tags!")

    if twitter_card:
        print(f"[+] Twitter Card card type: {twitter_card}")
    else:
        print("[-] Missing twitter:card tag!")

    # JSON-LD Structured Data
    if parser.json_ld_schemas:
        print(f"[+] Found {len(parser.json_ld_schemas)} JSON-LD schema scripts:")
        for idx, schema in enumerate(parser.json_ld_schemas, 1):
            # Try to identify the @type
            type_match = re.search(r'"@type"\s*:\s*"([^"]+)"', schema)
            schema_type = type_match.group(1) if type_match else "Unknown"
            print(f"    - Schema #{idx}: {schema_type}")
    else:
        print("[-] Missing JSON-LD structured data (schema.org)!")

    # Headings Structure
    print("\n--- HEADING STRUCTURE ---")
    for level in sorted(parser.headings.keys()):
        h_list = parser.headings[level]
        # filter empty
        h_list = [h for h in h_list if h]
        print(f"[+] {level.upper()} tags count: {len(h_list)}")
        if level == 'h1':
            if len(h_list) == 1:
                print(f"    - H1: {h_list[0]}")
            elif len(h_list) > 1:
                print(f"    [!] Warning: Multiple H1 tags found: {h_list}")
            else:
                print("    [-] Critical: No H1 tag found!")
        elif len(h_list) > 0 and len(h_list) <= 5:
            for item in h_list:
                print(f"    - {item}")
        elif len(h_list) > 5:
            print(f"    - First 3 items: {h_list[:3]}")

    # Check robots.txt
    print("\n--- ROBOTS.TXT CHECK ---")
    parsed_url = urllib.parse.urlparse(url)
    robots_url = f"{parsed_url.scheme}://{parsed_url.netloc}/robots.txt"
    print(f"Fetching: {robots_url}")
    
    robots_txt = None
    try:
        with urllib.request.urlopen(urllib.request.Request(robots_url, headers={'User-Agent': 'Mozilla/5.0'})) as r_resp:
            robots_txt = r_resp.read().decode('utf-8', errors='replace')
            print("[+] robots.txt fetched successfully.")
    except Exception as e:
        print(f"[-] Could not retrieve robots.txt: {e}")

    if robots_txt:
        print("Contents of robots.txt:")
        print("----------------------------")
        print(robots_txt.strip())
        print("----------------------------")
        
        # Verify AI Bot configuration
        ai_bots = ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended']
        print("\nChecking AI crawler access in robots.txt:")
        for bot in ai_bots:
            # Simple check if bot name is explicitly mentioned
            if bot.lower() in robots_txt.lower():
                print(f"  [+] {bot} is explicitly mentioned.")
            else:
                print(f"  [?] {bot} is NOT explicitly mentioned (falls back to '*' rules).")

    # Check sitemap
    print("\n--- SITEMAP CHECK ---")
    # Find sitemap in robots.txt
    sitemap_url = None
    if robots_txt:
        sitemap_match = re.search(r'^Sitemap:\s*(.+)$', robots_txt, re.IGNORECASE | re.MULTILINE)
        if sitemap_match:
            sitemap_url = sitemap_match.group(1).strip()
            print(f"[+] Found sitemap reference in robots.txt: {sitemap_url}")
        else:
            print("[-] No Sitemap reference found in robots.txt!")
    
    if not sitemap_url:
        sitemap_url = f"{parsed_url.scheme}://{parsed_url.netloc}/sitemap.xml"
        print(f"Fallback to default: {sitemap_url}")

    try:
        with urllib.request.urlopen(urllib.request.Request(sitemap_url, headers={'User-Agent': 'Mozilla/5.0'})) as s_resp:
            sitemap_content = s_resp.read().decode('utf-8', errors='replace')
            urls = re.findall(r'<loc>([^<]+)</loc>', sitemap_content)
            print(f"[+] Sitemap loaded successfully. Found {len(urls)} URLs.")
            if urls:
                print("First 10 URL locations:")
                for u in urls[:10]:
                    print(f"  - {u}")
                
                # Check for old vercel domain in sitemap
                vercel_urls = [u for u in urls if 'vercel.app' in u]
                if vercel_urls:
                    print(f"  [!] Warning: Found {len(vercel_urls)} links referencing 'vercel.app' in the sitemap!")
                else:
                    print("  [+] All sitemap URLs are free of 'vercel.app'.")
    except Exception as e:
        print(f"[-] Could not load sitemap: {e}")

    print("==================================================")
    print("AUDIT COMPLETE")
    print("==================================================")

if __name__ == "__main__":
    url_to_audit = "https://www.apexengineering.org.in/"
    if len(sys.argv) > 1:
        url_to_audit = sys.argv[1]
    audit_url(url_to_audit)
