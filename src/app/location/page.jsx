'use client';

import { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function LocationPage() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    const inputWrapperRef = useRef(null);

    // Fetch suggestions as user types
    useEffect(() => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            const res = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxgl.accessToken}`
            );
            const data = await res.json();
            setSuggestions(data.features);
        };

        const timeoutId = setTimeout(fetchSuggestions, 300); // debounce
        return () => clearTimeout(timeoutId);
    }, [query]);

    // Load map when a location is selected
    useEffect(() => {
        if (!selectedLocation || !mapContainer.current) return;

        const [lng, lat] = selectedLocation.center;

        if (!mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/navigation-day-v1',
                center: [lng, lat],
                zoom: 14,
            });

            new mapboxgl.Marker().setLngLat([lng, lat]).addTo(mapRef.current);
        } else {
            mapRef.current.flyTo({ center: [lng, lat], zoom: 12 });
            new mapboxgl.Marker().setLngLat([lng, lat]).addTo(mapRef.current);
        }
    }, [selectedLocation]);

    // Close suggestions when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputWrapperRef.current && !inputWrapperRef.current.contains(event.target)) {
                setSuggestions([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle selection of a suggestion
    const handleSelect = (place) => {
        setQuery(place.place_name);         // Show full name in input
        setSuggestions([]);                 // Hide suggestions
        setSelectedLocation(place);         // Move map
    };

    return (
        <div className="w-full h-screen relative">
            {/* Search input and suggestions */}
            <div ref={inputWrapperRef} className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-2xl px-4">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search City" 
                    className="w-full px-6 py-4 bg-[#161616] border border-[#404040] text-white rounded-full shadow-lg focus:outline-none"
                />
                {suggestions.length > 0 && (
                    <ul className="absolute w-full mt-2 bg-[#0D0D0D] rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                        {suggestions.map((place) => (
                            <li
                                key={place.id}
                                className="p-3 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleSelect(place)}
                            >
                                {place.place_name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Map display */}
            <div ref={mapContainer} className="w-full h-screen" />
        </div>
    );
}
