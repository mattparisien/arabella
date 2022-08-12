export default frag = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform sampler2D image;

    varying vec2 v_texcoord;

    void main(void)
        {
            vec2 uv = v_texcoord;
            uv.y = 1.0 - uv.y;
            
            float texture_ratio = 1600.0 / 1800.0;
            float canvas_ratio = u_resolution.x / u_resolution.y;
                    
            vec2 mouse = u_mouse / u_resolution;
            
            if (texture_ratio > canvas_ratio) {
                float diff = canvas_ratio / texture_ratio;
                float offset = (1.0 - diff) / 2.0;
                uv.x *= diff;
                uv.x += offset;
            } else {
                float diff = texture_ratio / canvas_ratio;
                float offset = (1.0 - diff) / 2.0;
                uv.y *= diff;
                uv.y += offset;
            }
                
            float blocks = 12.0;
            float x = floor(uv.x * blocks) / blocks;
            float y = floor(uv.y * blocks) / blocks;
                    
            vec2 distortion = 0.1 * vec2(sin(u_time * 0.5 + x * 1.0 + y * 1.5 + mouse.x * 2.0), cos(u_time * 0.2 + x * 1.1 + y * 2.0 + mouse.y));
            
            vec4 color = texture2D(image, uv + distortion);
            gl_FragColor = color;
        }
`;
