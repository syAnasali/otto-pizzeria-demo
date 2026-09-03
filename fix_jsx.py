import re

def html_to_jsx(html_content):
    body_match = re.search(r'<body[^>]*>(.*)</body>', html_content, re.DOTALL | re.IGNORECASE)
    body_content = body_match.group(1) if body_match else html_content

    # Basic replacements
    jsx = body_content.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('stroke-width=', 'strokeWidth=')
    jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
    jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
    jsx = jsx.replace('fill-rule=', 'fillRule=')
    jsx = jsx.replace('clip-rule=', 'clipRule=')
    
    # Styles
    jsx = jsx.replace('style="font-variation-settings: \'FILL\' 1;"', 'style={{ fontVariationSettings: "\\\'FILL\\\' 1" }}')
    jsx = re.sub(r'style="background-image: url\(\'(.*?)\'\)"', r'style={{ backgroundImage: "url(\'\1\')" }}', jsx)
    jsx = re.sub(r'style="width: (.*?);"', r'style={{ width: "\1" }}', jsx)

    # Comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx, flags=re.DOTALL)
    
    # Self-close
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', jsx)
    jsx = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', jsx)
    
    # Fix events
    jsx = re.sub(r'onclick="([^"]*)"', r'onClick={() => { \1 }}', jsx)
    jsx = re.sub(r'onsubmit="([^"]*)"', r'onSubmit={(event) => { \1 }}', jsx)

    return jsx

def process_file(input_file, output_file, component_name):
    with open(input_file, 'r', encoding='utf-8') as f:
        html = f.read()

    script_match = re.search(r'<script>(.*?)</script>', html, re.DOTALL)
    script_content = script_match.group(1) if script_match else ""
    if script_content:
        # Convert function declarations to const arrow functions inside component so they don't pollute global but are accessible
        script_content = re.sub(r'function (\w+)\s*\((.*?)\)', r'const \1 = (\2) =>', script_content)
        # Add React event to handleDirectBooking instead of inline `event.preventDefault()`
        
    html_no_script = re.sub(r'<script>.*?</script>', '', html, flags=re.DOTALL)
    jsx = html_to_jsx(html_no_script)

    react_code = f"""import React, {{ useEffect }} from 'react';

const {component_name} = () => {{
  // Script logic
  {script_content}

  return (
    <div className="min-h-screen">
      {jsx}
    </div>
  );
}};

export default {component_name};
"""
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(react_code)

process_file('../code.html', './src/pages/Home.jsx', 'Home')
process_file('../code1.html', './src/pages/Hotel.jsx', 'Hotel')
print("Fixed JSX.")
