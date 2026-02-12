import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Sunny Editorax - Professional Video Editor'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(to bottom right, #FFF1F2, #F3E8FF)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <div style={{ fontSize: 72, fontWeight: 900, color: '#1E1B4B', letterSpacing: '-0.05em' }}>
                            Sunny
                        </div>
                        <div style={{ fontSize: 72, fontWeight: 900, marginLeft: 20, letterSpacing: '-0.05em', backgroundClip: 'text', background: 'linear-gradient(to right, #ec4899, #a855f7)', color: 'transparent' }}>
                            Editorax
                        </div>
                    </div>

                    <div style={{ fontSize: 32, color: '#4C1D95', maxWidth: 900, textAlign: 'center', lineHeight: 1.4 }}>
                        Professional Video Editor crafting viral stories for<br />Instagram Reels, YouTube Shorts & TikTok.
                    </div>

                    <div style={{
                        marginTop: 50,
                        display: 'flex',
                        gap: 20,
                    }}>
                        <div style={{
                            padding: '15px 40px',
                            backgroundColor: '#1E1B4B',
                            color: 'white',
                            borderRadius: 50,
                            fontSize: 24,
                            fontWeight: 600,
                        }}>
                            View My Work
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
