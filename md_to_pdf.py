import markdown
from weasyprint import HTML, CSS

def md_to_pdf(input_md, output_pdf):
    with open(input_md, 'r', encoding='utf-8') as f:
        text = f.read()

    # Convert Markdown to HTML
    html_content = markdown.markdown(text, extensions=['extra', 'smarty'])

    # CSS to mimic the style of CV_EN_Oleksandr_Shtykhno.pdf
    # Using 'Helvetica Neue' for a clean, professional Swiss-style look.
    css_string = """
    @page {
        size: A4;
        margin: 2cm;
    }
    body {
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        font-size: 10pt;
        line-height: 1.4;
        color: #111;
    }
    h1 {
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        font-size: 26pt;
        font-weight: 700; /* Bold */
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 15px;
        letter-spacing: 0.5px;
        color: #000;
    }
    /* Black bar below the name */
    h1::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: #000;
        margin-top: 8px;
    }
    
    /* Section Headers with Black Background */
    h2 {
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        font-size: 11pt;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        background-color: #000;
        padding: 4px 8px;
        margin-top: 25px;
        margin-bottom: 10px;
        display: inline-block;
        width: auto;
        letter-spacing: 0.5px;
    }

    h3 {
        font-size: 11pt;
        font-weight: 700;
        margin-top: 15px;
        margin-bottom: 2px;
        color: #000;
    }
    
    p {
        margin-bottom: 6px;
        text-align: justify;
    }

    ul {
        margin-top: 4px;
        margin-bottom: 10px;
        padding-left: 18px;
        list-style-type: disc;
    }
    li {
        margin-bottom: 3px;
    }
    a {
        color: #000;
        text-decoration: none;
        border-bottom: 1px dotted #666; /* Subtle hint for links */
    }
    
    strong {
        font-weight: 600;
        color: #000;
    }
    
    /* Specific tweaks */
    h2 + p, h2 + ul {
        margin-top: 5px;
    }
    h3 + p {
        margin-top: 2px;
    }
    
    /* Contact info adjustments */
    h1 + p {
        font-size: 10pt;
        margin-bottom: 25px;
    }
    """

    # Wrap in HTML structure
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>CV</title>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """

    # Generate PDF
    HTML(string=full_html).write_pdf(output_pdf, stylesheets=[CSS(string=css_string)])
    print(f"Successfully created {output_pdf}")

if __name__ == "__main__":
    md_to_pdf("CV_EN.md", "CV_EN_Oleksandr_Shtykhno.pdf")
    md_to_pdf("CV_NL.md", "CV_NL_Oleksandr_Shtykhno.pdf")